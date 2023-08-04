import { Link } from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium text-blue-600 hover:text-blue-500">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}