import { IVariantes } from "@/types/variantes";

type Props = {
    variante: IVariantes;
    onClose: () => void;
};

export const ModalDetallesVariante = ({ variante, onClose }: Props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-2xl rounded-lg bg-white p-6">

                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Detalles de la variante
                    </h2>

                    <button
                        onClick={onClose}
                        className="cursor-pointer text-gray-500 hover:text-gray-800"
                    >
                        ✕
                    </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-5">

                    <div>
                        <p className="text-sm text-gray-500">
                            Nombre
                        </p>

                        <p className="font-medium">
                            {variante.nombre}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Precio
                        </p>

                        <p className="font-medium">
                            ₡ {variante.precio.toFixed(2)}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Stock
                        </p>

                        <p className="font-medium">
                            {String(variante.stock)}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Presentación
                        </p>

                        <p className="font-medium">
                            {String(variante.presentacion)} {variante.unidadMedida}
                        </p>
                    </div>

                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="rounded-md bg-acento px-5 py-2 text-sm text-white cursor-pointer"
                    >
                        Cerrar
                    </button>
                </div>

            </div>

        </div>
    );
};