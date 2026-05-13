const MID_AD_MIN_PARAGRAPHS = 3;

export type ArticleAdPlan = {
  /** In-content native unit around 40–50% of body copy. */
  showMidAd: boolean;
  /** Optional unit after author box on shorter articles (keeps total at 3). */
  showAuthorAd: boolean;
};

/** Caps article body ads at 3: header banner + (mid OR author) + end native. */
export function getArticleAdPlan(paragraphCount: number): ArticleAdPlan {
  const showMidAd = paragraphCount >= MID_AD_MIN_PARAGRAPHS;
  return {
    showMidAd,
    showAuthorAd: !showMidAd && paragraphCount > 0,
  };
}
