import { AppProps } from "next/app";
import { ReactComponentElement } from "react";

{
  /* <section {id} class={`relative py-3 flex w-auto h-screen ${classes}`}>
	<slot />
</section> */
}
const SectionWrap = (Component: React.FC, id: string, classNames?: string) =>
  function HOC() {
    return (
      <section
        id={id}
        className={`relative flex w-screen h-screen ${classNames}`}
      >
        <Component />
      </section>
    );
  };
export default SectionWrap;
