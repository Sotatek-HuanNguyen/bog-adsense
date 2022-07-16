import type { NextPage } from "next";
import Header from "components/Header";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const Contact: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <section className="py-20 px-5 md:px-10">
        <div className="m-auto flex w-full max-w-3xl flex-col">
          <div className="flex border">
            <div className="flex w-1/2 flex-col space-y-3 bg-blue-700 p-8 text-white">
              <h1 className="text-2xl font-bold">Get in touch</h1>
              <p className="text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5" />
                <p className="ml-2 text-base">+91 123 456 789</p>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-5 w-5" />
                <p className="ml-2 text-base">kiran@boxyhq.com</p>
              </div>
            </div>
            <div className="w-1/2 p-8">
              <form action="#" className="space-y-5">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-primary w-full">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
