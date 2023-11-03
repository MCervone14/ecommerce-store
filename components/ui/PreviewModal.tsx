"use client";

import usePreviewModal from "@/hooks/usePreviewModal";
import Modal from "./Modal";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grids-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div>
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
