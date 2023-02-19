import axios, {AxiosResponse} from 'axios';

export const searchData = async (kind: string) => {
  const result: AxiosResponse<any> = await axios.get(
    `https://api.reddit.com/r/pics/${kind}.json`,
  );
  const response = result.data.data;
  const resolver = await response?.children.map((item: any) => {
    const formated = {
      title: item.data.title,
      authorFullname: item.data.author_fullname,
      created: item.data.created,
      numComments: item.data.num_comments,
      ups: item.data.ups,
      url: item.data.thumbnail,
      id: item.data.id,
      link: item.data.url,
    };
    return formated;
  });

  return resolver;
};
