import { CheckCircle } from "lucide-react"

const Page2 = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-20">
      <div className="w-full  rounded-2xl overflow-hidden">

        <div className="p-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-800">
            Pick Your Mowing Frequency
          </h2>
          <p className="text-gray-500 mt-2 text-xl">
            The GreenPal community provides
          </p>
        </div>

        {/* Service Options */}
        <div className="flex flex-col gap-3 p-5">
          <div className="flex gap-4 items-start bg-orange-50 p-4 rounded-lg border border-orange-100">
            <div className="bg-orange-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full text-lg">
              1x
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">One-Time Cuts</h3>
              <p className="text-gray-600 text-sm">
                Great for anyone looking to take a break from mowing their lawn.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full">
              <img
                src="https://cdn-icons-png.freepik.com/512/13762/13762173.png?ga=GA1.1.109328347.1753693542"
                alt="leaf"
                className="w-5 h-5"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Recurring Service</h3>
              <p className="text-gray-600 text-sm">
                Perfect for those in need of weekly, bi-weekly or monthly cuts.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="px-6 pb-6">
         <table className="w-full text-left border-collapse">
  <thead>
    <tr>
      <th className="py-3 text-gray-700 font-semibold text-sm">
        Include
      </th>
      <th className="py-3 text-gray-700 font-semibold text-sm text-center">
        One-Time Cuts
      </th>
      <th className="py-3 text-gray-700 font-semibold text-sm text-center">
        Recurring Service
      </th>
    </tr>
  </thead>
  <tbody>
    {[
      "Mowing",
      "String trimming",
      "Clearing grass clipping from hard surfaces",
      "Picture receipt",
      "Outstanding customer service",
      "Maintaining edge along driveway & sidewalks",
      "Keep the same lawn service each time",
      "Easy skip & pause feature",
      "Locked in pricing all season",
    ].map((item, index) => (
      <tr
        key={index}
        className="border-t border-gray-200 text-gray-700 text-sm"
      >
        <td className="py-3">{item}</td>

        {/* ✅ Both icons perfectly centered */}
        <td className="py-3 text-center align-middle">
          <CheckCircle fill="#61D15C" color="white" className="inline-block" />
        </td>
        <td className="py-3 text-center align-middle">
          <CheckCircle fill="#61D15C" color="white" className="inline-block" />
        </td>
      </tr>
    ))}
  </tbody>
</table>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-4xl">
              Weekly customers save <br />
              <span className="text-orange-500 font-extrabold text-3xl">
                up to 30%
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2





