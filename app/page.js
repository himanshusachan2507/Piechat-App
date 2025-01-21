import Image from "next/image";

import React from "react";

const Homepage = () => {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat bg-blue-300">
        <div className="container mx-auto py-24 text-center text-black">
          <h1 className="text-5xl font-bold mb-4">Piechat - Chat with your friends and more!</h1>
          <p className="text-lg mb-8">
            Welcome to Piechat the fun and easy way to connect with your friends andfamily Stay on touch, share stories and laughs, and create lasting memories - all in one place
          </p>

          <button  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
           Start Chatting
           </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-10 flex display-flex justify-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-500 ronded-lg shadow-md">
            <svg
              className="w-10 h-10 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="ht"
            ></svg>
            <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
            <p>Enjoy Instant messaging with friends and family.</p>
          </div>

          <div className="p-6 bg-gray-500 ronded-lg shadow-md">
            <svg
              className="w-10 h-10 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="ht"
            ></svg>
            <h3 className="text-xl font-semibold mb-2">Group Chat</h3>
            <p>Create and join group chats with your loved ones.</p>
          </div>

          <div className="p-6 bg-gray-500 ronded-lg shadow-md">
            <svg
              className="w-10 h-10 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="ht"
            ></svg>
            <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
            <p>Easily share photos, videos, and documents.</p>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-10 flex display-flex justify-center">Pay once, use forever </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-400 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
            <p>Limited features</p>
            <p className="text-2xl font-bold">$0/month</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px">
              Sign Up
            </button>
          </div>
          <div className="p-6 bg-blue-400 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4"> Standard Plan</h3>
            <p>All Essential features </p>
            <p className="text-2xl font-bold">$5/month</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px">
              Buy Now
            </button>
            </div>

            <div className="p-6 bg-blue-400 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4"> Premium Plan</h3>
            <p>All features + advanced options</p>
            <p className="text-2xl font-bold">$10/month</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px">
              Learn More
            </button>
            {/* </div> */}

          </div>
        </div>
      </section>

      {/* Footer (optional) */}
      {/* ... */}
    </div>
  );
};

export default Homepage;

export const metadata = {
  title: "Home - PieChat",
  description: "PieChat helps you connect with people of your choice",
};
