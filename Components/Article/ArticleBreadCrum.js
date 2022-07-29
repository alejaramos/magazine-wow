import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const ArticleBreadCrum = ({ news }) => {
  return (
    <Breadcrumb
      p="2em"
      pb="2em"
      separator="•"
      fontSize={["10px", "12px", "14px", "16px"]}
      lineHeight=" 12px"
      letterSpacing=" 0.05em"
      color="#CF02BB"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">WOW!</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">UNIVERSO WOW</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">
          <strong>{news.field_category}</strong>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default ArticleBreadCrum;
