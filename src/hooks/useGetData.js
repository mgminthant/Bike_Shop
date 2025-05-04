import data from "../data/data"

export default function useGetData(id) {
    const bike = data.bikes.find((item) => item.id === id);
    return bike;
}
