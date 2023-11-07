import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
    const [userData, setUserData] = useState({
        nume: "",
        prenume: "",
        email: "",
        parola: "",
        confirmParola: "",
        tip_utilizator: "proprietar", // Adăugăm tip_utilizator în starea componentei
    });

    const [error, setError] = useState("");


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.parola !== userData.confirmParola) {
            setError("Parolele nu coincid.");
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nume: userData.nume,
                    prenume: userData.prenume,
                    email: userData.email,
                    parola: userData.parola,
                    tip_utilizator: userData.tip_utilizator, // Adăugăm tip_utilizator în request
                }),
            });

            if (response.status === 200) {
                console.log("Utilizatorul a fost înregistrat cu succes!");
                setError(""); // Resetăm mesajul de eroare în cazul în care înregistrarea a reușit
            } else {
                setError("Eroare la înregistrare."); // Setăm mesajul de eroare în cazul în care înregistrarea a eșuat
            }
        } catch (error) {
            setError("Eroare la înregistrare."); // Setăm mesajul de eroare în cazul în care înregistrarea a eșuat
            console.error(error); // Afișăm detalii despre eroare în consolă (opțional)
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Înregistrează-te
                    </h2>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="tip_utilizator" className="block text-sm font-medium text-gray-700">
                                    Tip Utilizator:
                                </label>
                                <select
                                    id="tip_utilizator"
                                    name="tip_utilizator"
                                    autoComplete="tip_utilizator"
                                    required
                                    value={userData.tip_utilizator}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="proprietar">Proprietar</option>
                                    <option value="turist">Turist</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="nume" className="block text-sm font-medium text-gray-700">
                                    Nume:
                                </label>
                                <input
                                    id="nume"
                                    name="nume"
                                    type="text"
                                    autoComplete="nume"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="nume"
                                    value={userData.nume}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="prenume" className="block text-sm font-medium text-gray-700">
                                    prenume:
                                </label>
                                <input
                                    id="prenume"
                                    name="prenume"
                                    type="text"
                                    autoComplete="prenume"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="pume"
                                    value={userData.prenume}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email:
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Email"
                                    value={userData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="Parola" className="block text-sm font-medium text-gray-700">
                                    Parola:
                                </label>
                                <input
                                    id="parola"
                                    name="parola"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="parola"
                                    value={userData.parola}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmParola" className="block text-sm font-medium text-gray-700">
                                Confirmă Parola:
                            </label>
                            <input
                                id="confirmParola"
                                name="confirmParola"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Confirmă Parola"
                                value={userData.confirmParola}
                                onChange={handleChange}
                            />
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Înregistrează-te
                            </button>
                        </div>

                        {error && (
                            <div className="text-red-500 text-center">
                                <p>{error}</p>
                            </div>
                        )}

                        <div className="text-center mt-4">
                            <p>
                                Ai cont deja?{" "}
                                <Link to="/login" className="text-indigo-600 hover:underline">
                                    Loghează-te aici
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default RegisterPage;
