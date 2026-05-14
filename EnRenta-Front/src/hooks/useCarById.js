import { use } from "react";

export const useCarById = (car, id) => {
    
    const {id} = useParams(); 

    const [car, setCar] = useState(null);

    useEffect(() => {

        const fetchCar = async () => {

            try {
                const data = await getCarById(id);
                setCar(response.data);
                } 
            catch (error) {
                console.error("Error fetching car data:", error);
                }
        }
        fetchCar();
    }, [id]);

    return car;
};
