import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about React?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with these projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Course in Hindi
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://ghost.codersera.com/blog/content/images/2022/08/reactjs.png" />
      </div>
    </div>
  );
}
