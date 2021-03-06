import React, { FC, useEffect, useRef } from 'react';
import cn from 'classnames'
import { IReview } from 'types';
import { getFormatDate } from 'helpers';
import { useToggle } from '@/hooks';
import { LikeAndDislikeBar } from '@/components/ui';

export interface ReviewItemProps {
  review: IReview
}

const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  const [isOpen, setIsOpen] = useToggle()
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      // @ts-ignore
      containerRef.current?.style?.maxHeight = isOpen ? `${containerRef.current?.scrollHeight}px` : '0px'
    }
  }, [isOpen])

  const articleClass = cn({
    'bg-green-100': review.reviewType === 'POSITIVE',
    'bg-red-200': review.reviewType === 'NEGATIVE',
    'bg-yellow-50': review.reviewType === 'NEUTRAL',
  })

  const contentClass = cn({
    'space-y-4 smooth-height px-4 sm:px-6': true,
    'overflow-hidden max-h-0': !isOpen,
  })

  return (
    <article className={`rounded-xl overflow-hidden ${articleClass}`}>
      <button
        type="button"
        onClick={() => setIsOpen()}
        className="font-semibold w-full p-4"
      >
        {review.reviewTitle}
      </button>
      <div
        className={contentClass}
        ref={containerRef}
      >
        <div className="text-left text-xs space-y-2 text-gray-color flex items-center justify-between">
          <div>
            <h4>
              <i>
                Автор:
                {' ' + review.reviewAutor}
              </i>
            </h4>
            <data>
              {getFormatDate(review.reviewData)}
            </data>
          </div>

          <LikeAndDislikeBar
            dislikeValue={review.userNegativeRating}
            likeValue={review.userPositiveRating}
          />
        </div>
        <p className="text-gray-color text-xs text-justify pb-4">
          {review.reviewDescription}
        </p>
      </div>
    </article>
  );
};

export default ReviewItem;
