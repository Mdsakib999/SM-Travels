export const ImportantInformation = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <header className="mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          Important Information
        </h2>
        <hr className="border-gray-200" />
      </header>

      <article className="space-y-4 sm:space-y-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
            Passengers traveling to the United States, please note
          </h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc pl-5">
            <li>
              Who can travel? All fully vaccinated travelers are allowed to
              enter the country. All WHO-approved vaccines, including Covishield
              and Covaxin, are accepted by the USA.
            </li>
            <li>
              Destination restrictions: Non-vaccinated travelers from India
              cannot enter. Any traveler transiting via EU/UK cannot enter the
              USA.
            </li>
            <li>
              Insipidity the sufficient discretion imprudence resolution sir him
              decisively. Proceed how any engaged visitor.
            </li>
            <li>
              Explained propriety off out perpetual his you. Feel sold off felt
              nay rose met you. We so entreaties cultivated astonished is.
            </li>
            <li>
              Was sister for a few longer Mrs sudden talent become. Done may
              bore quit evil old mile. If likely am of beauty tastes.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
            A Note on Guidelines
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            While we do our best to get you the latest information, due to the
            rapidly evolving nature of current events, sometimes that is not
            possible. Please note, it is the sole responsibility of the
            passenger to ensure his or her eligibility to enter the destination
            or transit countries (as applicable). We accept no liability in this
            regard. Please check the travel rules of all regulatory websites
            before booking as well as commencing.
          </p>
        </div>
      </article>
    </div>
  );
};
