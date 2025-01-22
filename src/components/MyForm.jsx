const MyForm = () => {
  return (
    <section className="page-section">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h3 className="page-section__title">Contact</h3>
        </div>

        <div className=" grid sm:grid-cols-2 gap-8">
          <form
            method="POST"
            action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
            className="flex flex-col w-full text-blue_(ncs)-300"
          >
            <input
              className="bg-mindaro-900 p-2"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-mindaro-900"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-mindaro-900 p-2"
              name="message"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
              Let's Collaborate
            </button>
          </form>
          <div className="flex flex-col gap-4 self-center justify-center">
            <p>
              Send me a message through the contact form or email me directly.
            </p>
            <a className="contact__link" href="mailto:alexgeorgegeer@gmail.com">
              Email: alexgeorgegeer@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyForm;
