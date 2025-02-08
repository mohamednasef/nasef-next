
import Button from "./components/shared-component/button/button";
import Input from "./components/shared-component/input/input";
export default function Home() {
  return (
    <>
      <div className="flex items-center gap-4 p-6">
        <Button variant="secondary"  >  secondary  </Button>
        <Button variant="primary" outline >  fullWidth button    </Button>

        <Button variant="secondary" outline > secondary outline   </Button>
      </div>
      <div className="flex  items-center gap-4 p-6">
        <Button variant="primary" fullWidth>  fullWidth button    </Button>
      </div>
      <hr />
      <div className=" gap-4 p-6">

        <Input type="text" placeholder="Enter text" className="mb-4" />

        <div className="mb-4">
          <Input type="email" placeholder="Enter email" required errorMessage="Invalid email format" />
        </div>

        <Input type="password" placeholder="Enter password" />




      </div>

    </>
  );
}
