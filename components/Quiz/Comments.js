// // comments.js
// 'use client';

// import React, { useState } from 'react';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';

// const Comments = ({ initialComments = [] }) => {
//   const [commentText, setCommentText] = useState('');
//   const [comments, setComments] = useState(initialComments);

//   const handlePostComment = () => {
//     if (commentText.trim()) {
//       const newComment = {
//         id: Date.now(),
//         text: commentText.trim()
//       };
//       setComments(prev => [newComment, ...prev]);
//       setCommentText('');
//     }
//   };

//   return (
//     <div className="pt-6 space-y-4">
//       <h3 className="text-lg font-medium mb-4">Comments ({comments.length})</h3>
      
//       {/* Comment Box */}
//       <div className="space-y-2">
//         <Textarea 
//           placeholder="Write a comment..."
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           className="min-h-[80px]"
//         />
//         <Button onClick={handlePostComment}>
//           Post Comment
//         </Button>
//       </div>

//       {/* Comments List */}
//       <div className="space-y-3">
//         {comments.map(comment => (
//           <div key={comment.id} className="p-3 border rounded">
//             <p>{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Comments;
// components/Question/Comments.js
'use client';

import React, { useState, Suspense } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Loading = () => (
  <div className="animate-pulse h-40 bg-gray-100 rounded-md" />
);

const CommentsContent = ({ initialComments = [] }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(initialComments);

  const handlePostComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        text: commentText.trim()
      };
      setComments(prev => [newComment, ...prev]);
      setCommentText('');
    }
  };

  return (
    <div className="pt-6 space-y-4">
      <h3 className="text-lg font-medium mb-4">Comments ({comments.length})</h3>
      <div className="space-y-2">
        <Textarea
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="min-h-[80px]"
        />
        <Button onClick={handlePostComment}>Post Comment</Button>
      </div>
      <div className="space-y-3">
        {comments.map(comment => (
          <div key={comment.id} className="p-3 border rounded">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Comments = (props) => (
  <Suspense fallback={<Loading />}>
    <CommentsContent {...props} />
  </Suspense>
);

export default Comments;