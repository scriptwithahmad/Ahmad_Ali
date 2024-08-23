import Loaders from "@/pages/components/Loaders";
import {
  Analytics01Icon,
  BitcoinBagIcon,
  Calendar03Icon,
  PencilEdit02Icon,
  UserAdd02Icon,
} from "hugeicons-react";
import Link from "next/link";
import { format } from "timeago.js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Index = () => {
  const { slug } = useRouter().query;
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${slug}`);
        const jsonData = await res.json();
        setData(jsonData?.getSingleJob);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };
    getData();
  }, []);

  if (isFetching) {
    return <Loaders />;
  }

  return (
    <div className="p-8">
      <div className="flex md:flex-row flex-col items-start gap-4 max-w-[1200px] m-auto h-screen">
        {/* pareent div */}
        <section className="bg-white w-full md:w-[70%] rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">{data?.title}</h1>
            <Link href={`/dashboard/update-job?slug=${data?._id}`}>
              <PencilEdit02Icon
                size={20}
                color="#555"
                className="hover:text-blue-500 cursor-pointer hover:scale-110"
              />
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold pt-6 pb-2 text-gray-700">
              Job description
            </h2>
            <main dangerouslySetInnerHTML={{ __html: data?.desc }}></main>
          </div>
        </section>
        {/* Aside */}
        <aside className="bg-white w-full md:w-[30%] rounded-lg p-5 flex flex-col gap-4">
          {/* Data posted */}
          <div className="flex items-start gap-2">
            <Calendar03Icon size={26} color="#444" className="p-1" />
            <div>
              <h2 className="text-gray-500 text-sm">Data Posted</h2>
              <h1 className="text-gray-600 font-semibold">
                {format(data?.createdAt, "en_US")}
              </h1>
            </div>
          </div>
          {/* Employment type */}
          <div className="flex items-start gap-2">
            <UserAdd02Icon size={26} color="#444" className="p-1" />
            <div>
              <h2 className="text-gray-500 text-sm">Employment type</h2>
              <h1 className="text-gray-600 font-semibold">{data?.jobType}</h1>
            </div>
          </div>
          {/* Salay */}
          <div className="flex items-start gap-2">
            <BitcoinBagIcon size={26} color="#444" className="p-1" />
            <div>
              <h2 className="text-gray-500 text-sm">Employment type</h2>
              <h1 className="text-gray-600 font-semibold">
                {data?.salaryType}
              </h1>
            </div>
          </div>
          {/* experence */}
          <div className="flex items-start gap-2">
            <Analytics01Icon size={26} color="#444" className="p-1" />
            <div>
              <h2 className="text-gray-500 text-sm">Employment type</h2>
              <h1 className="text-gray-600 font-semibold">
                {data?.experience}
              </h1>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Index;
