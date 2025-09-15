interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    id?: string | number;
  }>;
  className?: string;
}

export default function ImageGallery({
  images,
  className = "",
}: ImageGalleryProps) {
  return (
    <div className={`w-full h-[800px] overflow-y-auto ${className}`}>
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridAutoRows: "10px",
          gridAutoFlow: "row dense",
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.id || index}
            className="relative overflow-hidden bg-gray-400"
            style={{
              gridRowEnd: `span ${Math.ceil((300 + Math.random() * 200) / 10)}`,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onLoad={(e) => {
                const img = e.currentTarget;
                const container = img.parentElement as HTMLElement;
                if (container && img.naturalWidth && img.naturalHeight) {
                  const aspectRatio = img.naturalHeight / img.naturalWidth;
                  const baseHeight = 170;
                  const targetHeight = baseHeight * aspectRatio;
                  const gridSpan = Math.ceil(targetHeight / 10);
                  container.style.gridRowEnd = `span ${gridSpan}`;
                }
              }}
              onError={(e) => {
                const aspectRatios = [0.75, 1.33, 0.56, 1, 0.67, 1.5];
                const randomRatio = aspectRatios[index % aspectRatios.length];
                const container = e.currentTarget.parentElement as HTMLElement;
                if (container) {
                  const baseHeight = 175;
                  const targetHeight = baseHeight * randomRatio;
                  const gridSpan = Math.ceil(targetHeight / 10);
                  container.style.gridRowEnd = `span ${gridSpan}`;
                }
                e.currentTarget.style.backgroundColor = "#9ca3af";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
