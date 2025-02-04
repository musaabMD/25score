// 'use client';

// import React, { useState, useEffect } from 'react';
// import {
//   ArrowLeft,
//   Crown,
//   Search,
//   Timer,
//   MessageSquare,
//   Pin,
//   XCircle,
//   Book,
//   Filter,
//   Flame,
// } from 'lucide-react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';

// // Subjects array added for the subject filter
// const subjects = [
//   { label: 'Mathematics', value: 'math' },
//   { label: 'Science', value: 'science' },
//   { label: 'English', value: 'english' },
//   { label: 'History', value: 'history' },
//   { label: 'Physics', value: 'physics' },
//   { label: 'Chemistry', value: 'chemistry' },
//   { label: 'Biology', value: 'biology' },
//   { label: 'Computer Science', value: 'cs' },
// ];

// const filters = [
//   { label: 'All', value: 'all', icon: Book },
//   { label: 'Pinned', value: 'pinned', icon: Pin },
//   { label: 'Incorrect', value: 'incorrect', icon: XCircle },
//   { label: 'Unused', value: 'unused', icon: Book },
// ];

// const Logo = ({ examName = '' }) => (
//   <div className="flex items-center">
//     <div className="flex-shrink-0">
//       <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//         <span className="text-lg md:text-xl font-bold text-white">S</span>
//       </div>
//     </div>
//     <span className="hidden md:block text-xl font-bold text-gray-800 ml-2">
//       Scoorly
//     </span>
//     <span className="text-sm font-medium text-gray-600 ml-2 badge-md badge-ghost">
//       {examName}
//     </span>
//   </div>
// );

// const QuizHeader = ({
//   onSearchChange,
//   onSubjectChange,
//   onFilterChange,
//   examName,
//   selectedCount, // New prop to pass the count of selected MCQs
// }) => {
//   const [mounted, setMounted] = useState(false);
//   const [subject, setSubject] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [timeLeft, setTimeLeft] = useState(1800);
//   const [isTimerRunning, setIsTimerRunning] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [subjectSearch, setSubjectSearch] = useState('');
//   const [filterSearch, setFilterSearch] = useState('');

//   useEffect(() => {
//     setMounted(true);
//     setIsTimerRunning(true);
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (isTimerRunning && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isTimerRunning, timeLeft]);

//   // Filter the subjects and filters based on the search inputs
//   const filteredSubjects = subjects.filter((item) =>
//     item.label.toLowerCase().includes(subjectSearch.toLowerCase())
//   );

//   const filteredFilters = filters.filter((item) =>
//     item.label.toLowerCase().includes(filterSearch.toLowerCase())
//   );

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (onSearchChange) onSearchChange(value);
//   };

//   const handleSubjectChange = (value) => {
//     setSubject(value);
//     if (onSubjectChange) onSubjectChange(value);
//   };

//   const handleFilterChange = (value) => {
//     setFilter(value);
//     if (onFilterChange) onFilterChange(value);
//   };

//   if (!mounted) return null;

//   return (
//     <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
//       {/* Main Header */}
//       <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-4 bg-white border-b">
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => (window.location.href = '/')}
//             className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"
//             title="Go Back"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <Logo examName={examName} />
//         </div>

//         <div className="flex items-center gap-1.5 md:gap-4">
//           <a
//             href="/dashboard"
//             className="flex items-center gap-0.5 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
//             title="View Streak"
//           >
//             <Flame className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
//             <span className="text-xs md:text-sm font-semibold">12</span>
//           </a>

//           <div className="flex items-center gap-0.5 px-1">
//             <Timer className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
//             <span className="text-xs md:text-sm font-medium text-gray-700">
//               {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
//             </span>
//           </div>

//           <a
//             href="/upgrade"
//             className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"
//             title="Upgrade"
//           >
//             <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
//           </a>

//           <a
//             href="/dashboard"
//             className="flex items-center bg-blue-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
//             title="View Score"
//           >
//             <span className="text-xs md:text-sm font-semibold text-blue-600">
//               43%
//             </span>
//           </a>

//           <a
//             href="/chat"
//             className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"
//             title="Chat Support"
//           >
//             <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
//           </a>
//         </div>
//       </div>

//       {/* Search and Filters Section */}
//       <div className="px-2 md:px-4 py-2 md:py-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           {/* Mobile View */}
//           <div className="block md:hidden space-y-3">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white border-gray-200 text-sm"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//             </div>
//             <div className="flex gap-2">
//               {/* Subject Filter */}
//               <Select value={subject} onValueChange={handleSubjectChange}>
//                 <SelectTrigger className="w-1/2 h-9 text-sm">
//                   <Book className="w-4 h-4 mr-1.5" />
//                   <SelectValue placeholder="Subject" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <div className="p-2">
//                     <Input
//                       placeholder="Search subjects..."
//                       value={subjectSearch}
//                       onChange={(e) => setSubjectSearch(e.target.value)}
//                       className="mb-2"
//                     />
//                   </div>
//                   {filteredSubjects.map((item) => (
//                     <SelectItem key={item.value} value={item.value}>
//                       {item.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               {/* Other Filter */}
//               <Select value={filter} onValueChange={handleFilterChange}>
//                 <SelectTrigger className="w-1/2 h-9 text-sm">
//                   <Filter className="w-4 h-4 mr-1.5" />
//                   <SelectValue placeholder="Filter" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <div className="p-2">
//                     <Input
//                       placeholder="Search filters..."
//                       value={filterSearch}
//                       onChange={(e) => setFilterSearch(e.target.value)}
//                       className="mb-2"
//                     />
//                   </div>
//                   {filteredFilters.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <SelectItem key={item.value} value={item.value}>
//                         <div className="flex items-center gap-2">
//                           <Icon className="w-4 h-4" />
//                           {item.label}
//                         </div>
//                       </SelectItem>
//                     );
//                   })}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           {/* Desktop View */}
//           <div className="hidden md:grid grid-cols-[auto,1fr,auto] gap-4 items-center">
//             {/* Subject Filter */}
//             <Select value={subject} onValueChange={handleSubjectChange}>
//               <SelectTrigger className="w-full">
//                 <Book className="w-4 h-4 mr-2" />
//                 <SelectValue placeholder="Select Subject" />
//               </SelectTrigger>
//               <SelectContent>
//                 <div className="p-2">
//                   <Input
//                     placeholder="Search subjects..."
//                     value={subjectSearch}
//                     onChange={(e) => setSubjectSearch(e.target.value)}
//                     className="mb-2"
//                   />
//                 </div>
//                 {filteredSubjects.map((item) => (
//                   <SelectItem key={item.value} value={item.value}>
//                     {item.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {/* Search Input */}
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border-gray-200"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//             </div>

//             {/* Other Filter */}
//             <Select value={filter} onValueChange={handleFilterChange}>
//               <SelectTrigger className="w-full">
//                 <Filter className="w-4 h-4 mr-2" />
//                 <SelectValue placeholder="Filter" />
//               </SelectTrigger>
//               <SelectContent>
//                 <div className="p-2">
//                   <Input
//                     placeholder="Search filters..."
//                     value={filterSearch}
//                     onChange={(e) => setFilterSearch(e.target.value)}
//                     className="mb-2"
//                   />
//                 </div>
//                 {filteredFilters.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <SelectItem key={item.value} value={item.value}>
//                       <div className="flex items-center gap-2">
//                         <Icon className="w-4 h-4" />
//                         {item.label}
//                       </div>
//                     </SelectItem>
//                   );
//                 })}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Tiny div to display selected MCQ count */}
//           {selectedCount !== undefined && (
//             <div className="mt-2 text-right text-xs text-gray-600">
//               {selectedCount} question{selectedCount !== 1 && 's'}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizHeader;
'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Crown, Search, Timer, MessageSquare, 
  Pin, XCircle, Book, Filter, Flame
} from 'lucide-react';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const subjects = [
  { label: 'Mathematics', value: 'math' },
  { label: 'Science', value: 'science' },
  { label: 'English', value: 'english' },
  { label: 'History', value: 'history' },
  { label: 'Physics', value: 'physics' },
  { label: 'Chemistry', value: 'chemistry' },
  { label: 'Biology', value: 'biology' },
  { label: 'Computer Science', value: 'cs' },
];

const filters = [
  { label: 'All', value: 'all', icon: Book },
  { label: 'Pinned', value: 'pinned', icon: Pin },
  { label: 'Incorrect', value: 'incorrect', icon: XCircle },
  { label: 'Unused', value: 'unused', icon: Book },
];

const Logo = ({ examName = '' }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-lg md:text-xl font-bold text-white">S</span>
      </div>
    </div>
    <span className="hidden md:block text-xl font-bold text-gray-800 ml-2">
      Scoorly
    </span>
    <span className="text-sm font-medium text-gray-600 ml-2 badge-md badge-ghost">
      {examName}
    </span>
  </div>
);

const QuizHeader = ({
  onSearchChange,
  onSubjectChange,
  onFilterChange,
  examName,
  selectedCount,
}) => {
  const [mounted, setMounted] = useState(false);
  const [subject, setSubject] = useState('');
  const [filter, setFilter] = useState('all');
  const [timeLeft, setTimeLeft] = useState(1800);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectSearch, setSubjectSearch] = useState('');
  const [filterSearch, setFilterSearch] = useState('');

  useEffect(() => {
    setMounted(true);
    setIsTimerRunning(true);
  }, []);

  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const filteredSubjects = subjects.filter(item =>
    item.label.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  const filteredFilters = filters.filter(item =>
    item.label.toLowerCase().includes(filterSearch.toLowerCase())
  );

  if (!mounted) return null;

  const renderSearchBar = (isMobile = false) => (
    <div className="relative">
      <Search className={`absolute left-${isMobile ? '2.5' : '3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-${isMobile ? '4' : '5'} h-${isMobile ? '4' : '5'}`} />
      <Input
        type="text"
        placeholder="Search..."
        className={`w-full pl-${isMobile ? '8' : '10'} pr-${isMobile ? '3' : '4'} py-${isMobile ? '1.5' : '2'} rounded-lg bg-white border-gray-200 ${isMobile ? 'text-sm' : ''}`}
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
          onSearchChange?.(e.target.value);
        }}
      />
    </div>
  );

  const renderFilters = (isMobile = false) => (
    <div className={`flex gap-2 ${isMobile ? 'w-full' : ''}`}>
      <Select value={subject} onValueChange={value => {
        setSubject(value);
        onSubjectChange?.(value);
      }}>
        <SelectTrigger className={`${isMobile ? 'w-1/2' : 'w-full'} h-9 text-sm`}>
          <Book className="w-4 h-4 mr-1.5" />
          <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
          {filteredSubjects.map(item => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={filter} onValueChange={value => {
        setFilter(value);
        onFilterChange?.(value);
      }}>
        <SelectTrigger className={`${isMobile ? 'w-1/2' : 'w-full'} h-9 text-sm`}>
          <Filter className="w-4 h-4 mr-1.5" />
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          {filteredFilters.map(item => {
            const Icon = item.icon;
            return (
              <SelectItem key={item.value} value={item.value}>
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {item.label}
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.href = '/'}
            className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <Logo examName={examName} />
        </div>

        <div className="flex items-center gap-1.5 md:gap-4">
          <a
            href="/dashboard"
            className="flex items-center gap-0.5 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
          >
            <Flame className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
            <span className="text-xs md:text-sm font-semibold">12</span>
          </a>

          <div className="flex items-center gap-0.5 px-1">
            <Timer className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            <span className="text-xs md:text-sm font-medium text-gray-700">
              {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </span>
          </div>

          <a
            href="/upgrade"
            className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"
          >
            <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
          </a>

          <a
            href="/dashboard"
            className="flex items-center bg-blue-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
          >
            <span className="text-xs md:text-sm font-semibold text-blue-600">
              43%
            </span>
          </a>

          <a
            href="/chat"
            className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"
          >
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
          </a>
        </div>
      </div>

      <div className="px-2 md:px-4 py-2 md:py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="block md:hidden space-y-3">
            {renderSearchBar(true)}
            {renderFilters(true)}
          </div>

          <div className="hidden md:grid grid-cols-[auto,1fr,auto] gap-4 items-center">
            {renderFilters()}
            {renderSearchBar()}
            {renderFilters()}
          </div>

          {selectedCount !== undefined && (
            <div className="mt-2 text-right text-xs text-gray-600">
              {selectedCount} question{selectedCount !== 1 && 's'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
