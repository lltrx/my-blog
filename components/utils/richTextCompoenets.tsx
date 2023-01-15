import Image from "next/image";
import Link from "next/link";
import urlFor from "../../lib/urlFor";

export const RichTextCompoenets = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-extrabold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-extrabold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-extrabold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-extrabold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl py-10 font-extrabold">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-lg py-10 font-extrabold">{children}</h6>
    ),
    normal: ({ children }: any) => <p className="py-5">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextCompoenets;
