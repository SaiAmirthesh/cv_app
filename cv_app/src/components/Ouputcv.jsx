function Outputcv({ General, Educational, Experience }) {
  const { name, email, phone } = General;
  const { school, course, styear, endyear } = Educational;
  const {
    company,
    position,
    styear: expStyear,
    endyear: expEndyear,
  } = Experience;

  return (
    <div className="bg-white text-black p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Resume Preview</h1>
      <p className="text-center mb-6 text-gray-600">
        Here is what your CV looks like
      </p>

      {name && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-1 mb-2">
            {name}
          </h2>
          {email && <p className="text-gray-700">Email: {email}</p>}
          {phone && <p className="text-gray-700">Phone: {phone}</p>}
        </div>
      )}

      {(school || course || styear || endyear) && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <div className="pl-4">
            {school && <p className="font-medium">{school}</p>}
            {course && <p className="text-gray-700">{course}</p>}
            {(styear || endyear) && (
              <p className="text-gray-700">
                {styear} - {endyear}
              </p>
            )}
          </div>
        </div>
      )}

      {(company || position || expStyear || expEndyear) && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <div className="pl-4">
            {company && <p className="font-medium">{company}</p>}
            {position && <p className="text-gray-700">{position}</p>}
            {(expStyear || expEndyear) && (
              <p className="text-gray-700">
                {expStyear} - {expEndyear}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Outputcv;
