type PlaylistDetailPageParams = {
  params: {
    slug: string;
  };
};

export default function PlaylistDetailPage({
  params,
}: PlaylistDetailPageParams) {
  const { slug } = params;

  return <div>playlist detail page {slug}</div>;
}
