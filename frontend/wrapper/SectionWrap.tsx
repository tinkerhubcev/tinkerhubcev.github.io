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
