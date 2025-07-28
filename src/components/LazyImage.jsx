import { useState } from 'react';
import LazyLoad from 'react-lazyload';

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <LazyLoad height={200} offset={100} once>
      <div className={`relative ${className}`}>
        {!isLoaded && (
          <img
            src={placeholder}
            alt="Loading..."
            className={`${className} blur-sm`}
            style={{ filter: 'blur(5px)' }}
          />
        )}
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      </div>
    </LazyLoad>
  );
};

export default LazyImage;

