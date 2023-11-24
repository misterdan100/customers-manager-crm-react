import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    //* Catch the error in error
    const error = useRouteError()
    console.log(error);
    return (
        <div className='space-y-8'>
            <h1 className="text-center text-6xl font-extrabold my-20 text-blue-900">CRM - Clientes</h1>
            <p className="text-center font-bold">Hubo un Error!</p>
            <p className="text-center text-red-600">{error.message}</p>

        </div>
    )
}