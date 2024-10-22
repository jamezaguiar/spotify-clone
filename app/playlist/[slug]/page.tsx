type PlaylistDetailPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlaylistDetailPage(props: PlaylistDetailPageParams) {
  const params = await props.params;
  const { slug } = params;

  return <div>playlist detail page {slug}</div>;
}
