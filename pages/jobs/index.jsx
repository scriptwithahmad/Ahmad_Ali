import {
  MoreVerticalIcon,
  SignalFull02Icon,
  UserIcon,
  ViewIcon,
} from "hugeicons-react";
import React, { useState } from "react";

const index = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="h-screen content-center max-w-[1200px] m-auto">
      <h2 className="text-4xl font-semibold text-gray-700 mb-5">
        Explore Latest Jobs
      </h2>
      <section className="grid grid-cols-4 gap-4">
        {[1].map((v, i) => (
          <div className="border border-dotted rounded-lg globalShadow relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="px-4 pt-4">
                <img
                  alt="job logo"
                  className="w-12 rounded-lg overflow-hidden"
                  src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/company/company-1.webp"
                />
              </div>
              <MoreVerticalIcon
                size={38}
                color="#333"
                onClick={() => setOpen(!open)}
                className="mr-3 p-1 cursor-pointer hover:bg-gray-50 rounded-full"
              />
              {/* Actions Overlay */}
              <div
                className={`bg-gray-100 rounded-lg absolute top-8 p-1.5 transition-all
                  ${open ? "right-10" : "-right-[80%]"}
                `}
              >
                {["Edit", "Delete"].map((v, i) => {
                  return (
                    <div className="flex items-center gap-1 hover:bg-gray-200 px-2 py-1 rounded-lg">
                      <ViewIcon size={14} color={"#444"} />
                      <span className="text-gray-500 text-sm">{v}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* content */}
            <div className="border-b border-dotted p-5">
              <h1 className="text-lg font-semibold">Software Engineer</h1>
              <p className="py-2 text-gray-500 text-sm">
                Posted data: 12 Aug 2024
              </p>
              {/* how many user applied */}
              <div className="flex items-center gap-1">
                <UserIcon size={14} color={"green"} />
                <span className="text-green-600 text-sm">12 Candidates</span>
              </div>
            </div>
            {/* content features */}
            <div className="grid grid-cols-2 justify-between p-5 text-gray-500 text-sm">
              {["No Experience", "Full Time", "Negotiable", "CEO"].map(
                (v, i) => {
                  return (
                    <div key={i} className="flex items-center gap-1">
                      <SignalFull02Icon size={15} color="#333" />
                      <p>{v}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default index;
