const DaySelector = () => {
  return (
    <section className="mt-2">
      <div className="block sm:flex">
        <a
          className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white mb-2 sm:mb-0 sm:mr-2"
          href="#"
        >
          Lunes
        </a>
        <a
          className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white mb-2 sm:mb-0 sm:mr-2"
          href="#"
        >
          Martes
        </a>
        <a
          className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white mb-2 sm:mb-0 sm:mr-2"
          href="#"
        >
          Miercoles
        </a>
        <a
          className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white mb-2 sm:mb-0 sm:mr-2"
          href="#"
        >
          Jueves
        </a>
        <a
          className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
          href="#"
        >
          Viernes
        </a>
      </div>
    </section>
  );
};

export default DaySelector;
