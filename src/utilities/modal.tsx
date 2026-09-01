"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

interface ModalProps {
  entidad: string;
  tipo: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: (nombre: string) => void;
  _nombre?: string;
}

export default function Modal({
  entidad,
  tipo,
  open,
  onOpenChange,
  onSuccess,
  _nombre
}: ModalProps) {
    const [nombre, setNombre] = useState(_nombre ?? "");
    useEffect(() => {
        setNombre(_nombre ?? "");
    }, [_nombre]);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Fondo oscuro */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-20" />

        {/* Ventana */}
        <Dialog.Content className="fixed top-1/2 left-1/2 w-100 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg z-21">
          
            <Dialog.Title className="text-xl font-semibold text-gray-800">
            {entidad} {tipo} 
            </Dialog.Title>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSuccess?.(nombre);
                    onOpenChange(false);
                }}
            >

                <div className="mt-5">
                <label
                    htmlFor="nombre"
                    className="block mb-2 text-sm font-medium text-gray-800"
                >
                    Nombre
                </label>

                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese el nombre"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-acento"
                />
                </div>

                <div className="mt-6 flex justify-end gap-2">

                <Dialog.Close asChild>
                    <button
                    type="button"
                    className="rounded-md bg-gray-200 px-4 py-2 cursor-pointer"
                    >
                    Cerrar
                    </button>
                </Dialog.Close>

                <button
                    type="submit"
                    className="rounded-md bg-acento px-4 py-2 text-white cursor-pointer"
                >
                    Guardar
                </button>

                </div>

            </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}