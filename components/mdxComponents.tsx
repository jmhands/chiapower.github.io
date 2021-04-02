export const mdxComponents = {
  img: (props) => <img className="max-w-full pt-6 pb-4" {...props} />,
  a: (props) => <a className="underline text-green-600" {...props} />,
  p: (props) => (
    <p
      className="text-lg tracking-normal leading-relaxed break-words text-justify py-6 text-gray-600"
      {...props}
    />
  ),
  h1: (props) => (
    <h1
      className="text-5xl tracking-wider leading-relaxed break-words pt-8 pb-2 text-gray-700"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-3xl tracking-wider break-words pt-6 pb-1 text-gray-700"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-2xl break-words pt-6 pb-1 text-gray-700" {...props} />
  ),

  table: (props) => (
    <div className="flex flex-col py-6 font-sans">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200" {...props} />
          </div>
        </div>
      </div>
    </div>
  ),
  thead: (props) => <thead className="bg-gray-50" {...props} />,
  th: (props) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  tbody: (props) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props} />
  ),
  td: (props) => <td className="px-6 py-4 whitespace-normal" {...props} />,
};
