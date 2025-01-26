import React from 'react';


const SkeletonLoader: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 animate-pulse">
      {/* Skeleton for Image */}
      <div className="bg-gray-300 h-80 rounded-lg animate-shimmer"></div>

      <div className="space-y-4">
        {/* Skeleton for Title */}
        <div className="bg-gray-300 h-6 rounded w-3/4 animate-shimmer"></div>
        
        {/* Skeleton for Date */}
        <div className="bg-gray-300 h-4 rounded w-1/2 animate-shimmer"></div>
        
        {/* Skeleton for Comments */}
        <div className="bg-gray-300 h-4 rounded w-1/3 animate-shimmer"></div>
        
        {/* Skeleton for Author */}
        <div className="bg-gray-300 h-4 rounded w-1/4 animate-shimmer"></div>
        
        {/* Skeleton for Description */}
        <div className="bg-gray-300 h-6 rounded w-5/6 animate-shimmer"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
