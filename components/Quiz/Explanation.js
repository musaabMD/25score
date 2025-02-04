// // explanation.js
// 'use client';

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Bookmark } from 'lucide-react';

// const Explanation = ({ explanation, imagePlaceholder = false }) => {
//   const [bookmarked, setBookmarked] = useState(false);

//   const toggleBookmark = () => {
//     setBookmarked(prev => !prev);
//   };

//   return (
//     <div className="pt-6 space-y-4">
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg font-medium">Explanation</h3>
//         <Button variant="outline" onClick={toggleBookmark} className="p-1">
//           <Bookmark className={`w-5 h-5 ${bookmarked ? 'text-yellow-500' : 'text-gray-600'}`} />
//         </Button>
//       </div>
//       <div className="space-y-4">
//         <p>{explanation}</p>
//         {imagePlaceholder && (
//           <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//             <span className="text-gray-500">Image Placeholder</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Explanation;
// components/Question/Explanation.js
'use client';

import React, { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';

const Loading = () => (
  <div className="animate-pulse h-48 bg-gray-100 rounded-md" />
);

const ExplanationContent = ({ explanation, imagePlaceholder = false }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => setBookmarked(prev => !prev);

  return (
    <div className="pt-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Explanation</h3>
        <Button variant="outline" onClick={toggleBookmark} className="p-1">
          <Bookmark className={`w-5 h-5 ${bookmarked ? 'text-yellow-500' : 'text-gray-600'}`} />
        </Button>
      </div>
      <div className="space-y-4">
        <p>{explanation}</p>
        {imagePlaceholder && (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Explanation = (props) => (
  <Suspense fallback={<Loading />}>
    <ExplanationContent {...props} />
  </Suspense>
);

export default Explanation;