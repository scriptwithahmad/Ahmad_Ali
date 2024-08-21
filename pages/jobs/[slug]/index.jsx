import {
  Analytics01Icon,
  BitcoinBagIcon,
  Calendar03Icon,
  UserAdd02Icon,
  UserIcon,
} from "hugeicons-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";

const Index = () => {
  const { slug } = useRouter().query;
  //   console.log(slug);

  const [data, setData] = useState({});
  //   console.log(data);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${slug}`);
        const jsonData = await res.json();
        setData(jsonData?.getSingleJob);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-start gap-4 max-w-[1200px] m-auto h-screen">
        {/* pareent div */}
        <section className="bg-white w-[70%] rounded-lg p-5">
          <h1>{data?.title}</h1>
          <div>
            <h2>Job description</h2>
            {/* <p>{data?.desc}</p> */}
            <div
              contentEditable="true"
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            ></div>
          </div>
        </section>
        {/* Aside */}
        <aside className="bg-white w-[30%] rounded-lg p-5 flex flex-col gap-4">
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
