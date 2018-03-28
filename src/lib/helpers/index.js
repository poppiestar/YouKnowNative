// @flow

export function reduceScores (scores: number[]): number {
    return scores.reduce((prev: number, next: number) => prev + next );
}
