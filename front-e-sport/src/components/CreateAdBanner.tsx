import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-lab-gradient self-stretch rounded-t-lg rounded-b-[0.75rem] mt-8 overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between rounded-lg ">
        <div>
          <strong className="block text-2xl text-white font-black">
            Não encontrou seu duo?
          </strong>
          <span className="block text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4  bg-violet-500 text-white flex items-center gap-3 rounded hover:bg-violet-600 duration-300">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
