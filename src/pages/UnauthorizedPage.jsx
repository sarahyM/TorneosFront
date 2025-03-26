import { FormattedMessage  } from 'react-intl';

function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-green-500 mb-4"><FormattedMessage id="Unauthorized3"/>  </h1>
            <p className="text-2xl text-gray-700 mb-4">
                <FormattedMessage id="Unauthorized1"/>                             
            </p>
            <p className="text-gray-700 mb-4">
                <FormattedMessage id="Unauthorized2"/>                             
            </p>
            {/* <Button primary rounded>Go Back</Button> */}
        </div>
    </div>
  )
}

export default Unauthorized;