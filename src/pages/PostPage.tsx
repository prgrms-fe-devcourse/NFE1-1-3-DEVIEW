import { PostPageHeader } from "@components/PostPage/PostPageHeader";
import { PostPageList } from "@components/PostPage/PostPageList";
import { PostPageSkeleton } from "@components/PostPage/PostPageListSkeleton";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import { useSortStore } from "@stores/sortStore";
import { useEffect } from "react";

type PostPageProps = {
  defaultSort?: "latest" | "views";
};
export default function PostPage({ defaultSort }: PostPageProps) {
  const { id } = useParams<{ id: string }>();
  const [userId, setUserId] = useState<string>("");
  const { setSort } = useSortStore();
  useEffect(() => {
    if (defaultSort) {
      setSort(defaultSort);
    }
  }, [defaultSort, setSort]);
  return (
    <div className="m-auto max-w p-4 pt-12">
      {id ? <PostPageHeader id={userId} /> : <PostPageHeader />}
      <ErrorBoundary fallback={<PostPageSkeleton isError={true} />}>
        <Suspense fallback={<PostPageSkeleton />}>
          {id ? <PostPageList id={id} setUserId={setUserId} /> : <PostPageList />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
