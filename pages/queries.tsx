import {
  gql
} from "@apollo/client";

export const queriesAxies = gql`
query GetLandsGrid(
      $from: Int!
      $size: Int!
      $sort: SortBy!
      $owner: String
      $criteria: LandSearchCriteria
      $auctionType: AuctionType
    ) {
      lands(
        criteria: $criteria
        from: $from
        size: $size
        sort: $sort
        owner: $owner
        auctionType: $auctionType
      ) {
        total
        results {
          ...LandBriefV2
          __typename
        }
        __typename
      }
    }
    
    fragment LandBriefV2 on LandPlot {
      owner
      landType
      row
      col
      __typename
    }
`

export const getTransactionQuery = gql`
query getTransaction($userId: String!) {
  getTransaction(userId: $userId) {
    amount,
    title,
    message
  }
}
`;


export const createTransactionQuery = gql`
  mutation createTransaction($title: String!, $amount: Float!, $message: String!) {
    createTransaction(title: $title, amount: $amount, message: $message) {
      message,
      time
    }
  }
`;