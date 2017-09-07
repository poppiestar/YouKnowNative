// @flow

export function reduceScores (scores: Array<number>): number {
    return scores.reduce((prev: number, next: number) => prev + next );
}
