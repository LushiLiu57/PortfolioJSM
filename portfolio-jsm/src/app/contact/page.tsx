import ContactForm from "@/src/components/Contact";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 dark:text-white-800">
      <h1 className="mt-8 text-[38px] font-bold dark:text-white-900 md:mt-[45px] md:text-64">
        Get in Touch
      </h1>
      <h3 className="mt-[10px] w-[400px] text-[12px] text-white-500 dark:text-white-800 md:ml-12 md:text-18">
        Lets Collaborate on Your Next Project
      </h3>
      <div className="mt-10 w-full bg-white-900 dark:bg-black-200 md:mt-16">
        <ContactForm />
      </div>
    </main>
  );
}
