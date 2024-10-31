import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const Singlepage = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-44 relative">
      {/*images */}
      <div className="w-full lg:w-1/2 sticky h-max top-20">
        <ProductImages />
      </div>
      {/* text  */}
      <div className="px-4 w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium"> Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          ipsum eveniet cupiditate voluptatem rerum possimus architecto ducimus,
          dolore id dolor voluptas minus cum? Incidunt, eius. Optio veniam, sunt
          culpa amet rerum delectus eius. Velit quaerat officia accusamus
          molestias, nesciunt provident. Tempore facilis necessitatibus
          voluptatibus earum dolorum repellendus labore eaque corporis odit
          culpa impedit error, odio asperiores vitae totam deserunt vel
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl"> $49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cum.
            Eveniet labore fugiat saepe sequi, doloremque tempore sint
            voluptatem, fugit expedita veniam corrupti praesentium amet, animi
            aspernatur accusantium natus sapiente. Voluptatum et natus omnis
            vero. Porro fugiat modi molestias laborum?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cum.
            Eveniet labore fugiat saepe sequi, doloremque tempore sint
            voluptatem, fugit expedita veniam corrupti praesentium amet, animi
            aspernatur accusantium natus sapiente. Voluptatum et natus omnis
            vero. Porro fugiat modi molestias laborum?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cum.
            Eveniet labore fugiat saepe sequi, doloremque tempore sint
            voluptatem, fugit expedita veniam corrupti praesentium amet, animi
            aspernatur accusantium natus sapiente. Voluptatum et natus omnis
            vero. Porro fugiat modi molestias laborum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
