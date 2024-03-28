import { useContext } from "react";

import { AuthContext } from "../contexts/auth";

function useAuth() {
    const { signed, setUser }: any = useContext(AuthContext);

    return { signed, setUser }
}

export default useAuth