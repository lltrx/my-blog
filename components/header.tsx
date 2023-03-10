import Link from "next/link";

function header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/"></Link>
        <h1>The Blog</h1>
      </div>

      <div>
        {/* A button that link to the blog accounts */}
        <p>Social Media button</p>
      </div>
    </header>
  );
}

export default header;
