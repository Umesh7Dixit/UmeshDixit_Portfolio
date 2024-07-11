
const AddResume = () => {

  const handle = ()=> {
    window.location.href = "https://umesh7dixit.github.io/UmeshDixit_Portfolio/resume.pdf";
  }

  return (
    <div className="p-4">
    <button
      className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 btn btn-primary"
      style={{ textDecoration: 'none' }}
      onClick={handle}
    >
      My Resume
      </button>
    </div>
  );
};

export default AddResume;