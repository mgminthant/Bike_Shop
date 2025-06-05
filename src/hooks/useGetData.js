import data from "../data/data"

export default function useGetData(id) {
    const product = data.totalProducts.find((item) => item.id === id);
    return product;
}
