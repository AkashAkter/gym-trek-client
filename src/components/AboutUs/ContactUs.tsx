import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactUs = () => {
  return (
    <section className="container mx-auto ">
      <div className="">
        <div className=" rounded-lg shadow-lg">
          <div className="mb-10">
            <h1 className="text-3xl">Contact us</h1>
            <p className="border border-b-4 border-primaryMat w-20 my-4"></p>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Write The Subject" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your message"
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full hover:bg-primaryMat">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
