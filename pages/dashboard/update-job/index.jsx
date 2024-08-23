import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import toast, { Toaster } from "react-hot-toast";
import { PlusSignIcon } from "hugeicons-react";
import { CldUploadWidget } from "next-cloudinary";
import { useSearchParams } from "next/navigation";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const path = useSearchParams();
  const slug = path.get("slug");

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    logo: "",
    salary: "",
    jobType: "",
    location: "",
    experience: "",
    salaryType: "",
  });

  //   console.log(formData)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    //   console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/jobs/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
    //   console.log(data);
      if (data?.success) {
        toast.success("job Updated successfully 😍");
        setFormData({
          title: "",
          desc: "",
          logo: "",
          salary: "",
          jobType: "",
          location: "",
          experience: "",
          salaryType: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${slug}`);
        const jsonData = await res.json();
        setFormData(jsonData?.getSingleJob);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="p-8">
      <Toaster />
      <div className=" max-w-[1000px] m-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Update <span className="text-indigo-500">job</span>
        </h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* title ------------- */}
          <div className="flex items-start flex-col justify-start">
            <label
              for="title"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Job Title
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={changeHandler}
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Editor for Desription --------------------- */}
          <div className=" mb-6">
            <Editor
              apiKey="z5f7ugf635wz96udas9dzbjlugsi9xxx6oxnnb6aw83hdkdk"
              value={formData.desc}
              onEditorChange={(content) =>
                setFormData({ ...formData, desc: content })
              }
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo blocks " +
                  "bullist numlist " +
                  "table image removeformat code fullscreen",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>

          {/* salary ------------- */}
          <div className="flex items-start flex-col justify-start">
            <label
              for="salary"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Minmum Salary
            </label>
            <input
              id="salary"
              type="number"
              name="salary"
              value={formData.salary}
              onChange={changeHandler}
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* location ------------- */}
          <div className="flex items-start flex-col justify-start">
            <label
              for="location"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Job location
            </label>
            <input
              id="location"
              name="location"
              value={formData.location}
              onChange={changeHandler}
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* experience ------------- */}
          <div className="flex items-start flex-col justify-start">
            <label
              for="experience"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Job Experience
            </label>
            <input
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={changeHandler}
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* jobType ------------- */}
          <select
            name="jobType"
            value={formData.jobType}
            onChange={changeHandler}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="" disabled>
              Choose job type
            </option>
            {[
              "Full Time",
              "Part Time",
              "Freelance",
              "Internship",
              "Remote",
            ].map((v, i) => (
              <option value={v} key={i} name="jobType">
                {v}
              </option>
            ))}
          </select>

          {/* salaryType ------------- */}
          <select
            name="salaryType"
            value={formData.salaryType}
            onChange={changeHandler}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="" disabled>
              Choose Salary Type
            </option>
            {["Hourly", "Daily", "Weekly", "Monthly", "Yearly"].map((v, i) => (
              <option value={v} key={i} name="salaryType">
                {v}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          >
            {loading ? "Loading..." : "Update Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
