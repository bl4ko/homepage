'use client';

import { Command } from 'cmdk';
import { useEffect, useRef, useState } from 'react';

export default function CommandMenu() {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (open) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      className="w-1/2 shadow-xl rounded-xl border-white-500 p-6 justify-center items-center  text-green border-green border-2 border-solid bg-black z-50"
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="framer">
        <div>
          <Command value={value} onValueChange={(v) => setValue(v)}>
            <div className="flex items-center gap-2 h-12 px-2 border-b border-gray-500 mb-3 pb-2">
              <span className="material-symbols-outlined">
                search
              </span>
              <Command.Input autoFocus className="font-sans border-none w-full text-base outline-none bg-black text-gray placeholder:text-gray" placeholder="Find components, packages, and interactions..." />
            </div>
            <Command.List>
              <div className="overflow-auto min-h-[308px] flex" cmdk-framer-items="">
                <div className="w-[40%]">
                  <Command.Group heading="Components">
                    <Item itemValue="Projects" subtitle="Finished projects" selectedItem={value}>
                      <span className="material-symbols-outlined">
                        list_alt
                      </span>
                    </Item>
                    <Item itemValue="Experience" selectedItem={value} subtitle="My experience">
                      <span className="material-symbols-outlined">
                        route
                      </span>
                    </Item>
                    <Item itemValue="Blog" subtitle="Personal blog" selectedItem={value}>
                      <span className="material-symbols-outlined">
                        rss_feed
                      </span>
                    </Item>
                  </Command.Group>
                </div>
                <hr className="w-[1px] h-auto border-0 mr-[8px] bg-green" />
                <div>
                  {value === 'Projects' && <div>Here we can see place holder for projects...</div>}
                  {value === 'Experience' && <div>Here we can see place holder for experince</div>}
                  {value === 'Blog' && <div>Here we can see place holder for blog.</div>}
                </div>
              </div>
            </Command.List>
          </Command>
        </div>
      </div>
    </dialog>
  );
}


function Item({ children, itemValue, subtitle, selectedItem: selectedValue }: { children: React.ReactNode; itemValue: string; subtitle: string, selectedItem: string }) {
  return (
    <Command.Item className={`cursor-pointer rounded-xl text-sm flex items-center gap-3 p-2 mr-2 space-y-1 font-medium transition-all duration-150 ease-in-out ${itemValue == selectedValue ? "bg-blue text-green" : "cursor-not-allowd text-gray"}`} value={itemValue} onSelect={() => { console.log(itemValue); }}>
      <div className="min-w-[32px] h-[32px] bg-orange-400 rounded-lg flex items-center justify-center">{children}</div>
      <div className="flex flex-col gap-[4px]">
        {itemValue}
        <span className={`text-[12px] font-normal hidden sm:inline ${selectedValue === itemValue ? "text-white" : "text-gray"}`}>{subtitle}</span>
      </div>
    </Command.Item>
  );
}
