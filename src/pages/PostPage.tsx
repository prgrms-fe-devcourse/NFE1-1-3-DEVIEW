import { PostPageHeader } from "@components/PostPage/PostPageHeader";
import { PostPageList } from "@components/PostPage/PostPageList";
import { PostPageSkeleton } from "@components/PostPage/PostPageListSkeleton";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<"recent" | "popular">("recent");
  return (
    <>
      <div className="m-auto max-w p-20">
        {id ? (
          <PostPageHeader id={id} order={order} setOrder={setOrder} />
        ) : (
          <PostPageHeader order={order} setOrder={setOrder} />
        )}
        <ErrorBoundary fallback={<PostPageSkeleton isError={true} />}>
          <Suspense fallback={<PostPageSkeleton />}>
            {id ? <PostPageList order={order} userId={id} /> : <PostPageList order={order} />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}
