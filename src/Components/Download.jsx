function Download ({ file, filename, type, children = 'Download' }) {
  return (
    <a
      href={file}
      download={filename}
      type={type}
      className='w-48 px-4 py-2 text-center transition-colors rounded-md bg-lime-600 hover:bg-lime-700 text-neutral-100'
    >
      {children}
    </a>
  );
}

export default Download;
