import { PostPageHeader } from "@components/PostPage/PostPageHeader";
import { PostPageList } from "@components/PostPage/PostPageList";
import { PostPageSkeleton } from "@components/PostPage/PostPageListSkeleton";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [sort, setSort] = useState<"latest" | "views">("latest");
  const [userId, setUserId] = useState<string>("");
  return (
    <div className="m-auto max-w p-4 pt-10">
      {id ? <PostPageHeader sort={sort} id={userId} /> : <PostPageHeader sort={sort} />}
      <ErrorBoundary fallback={<PostPageSkeleton isError={true} />}>
        <Suspense fallback={<PostPageSkeleton />}>
          {id ? (
            <PostPageList setSort={setSort} sort={sort} id={id} setUserId={setUserId} />
          ) : (
            <PostPageList sort={sort} setSort={setSort} />
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
